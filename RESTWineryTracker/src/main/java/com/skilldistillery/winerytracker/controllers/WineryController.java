package com.skilldistillery.winerytracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.winerytracker.entities.Winery;
import com.skilldistillery.winerytracker.services.WineryService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("api")
@CrossOrigin({"*", "http://localhost/"})
public class WineryController {
	
	@Autowired
	private WineryService wineryService;
	
	@GetMapping(path = {"wineries", "wineries/"})
	public List<Winery> index() {
		return wineryService.index();
	}
	
	@GetMapping("wineries/{id}")
	public Winery getWinery(@PathVariable("id") int id, HttpServletResponse resp) {
		Winery winery = wineryService.findById(id);
		if (winery != null) {
			return winery;
		}
		resp.setStatus(404);
		return null;
	}
	
	@PostMapping("wineries")
	public Winery createWinery(@RequestBody Winery winery, HttpServletRequest req, HttpServletResponse resp) {
		try {
			winery = wineryService.create(winery);
			if (winery != null) {
				resp.setStatus(201);
				resp.setHeader("Location", req.getRequestURL().append("/").append(winery.getId()).toString());
			}
		} catch (Exception e) {
			resp.setStatus(400);
			e.printStackTrace();
			winery = null;
		}
		return winery;
	}
	
	@PutMapping("wineries/{id}")
	public Winery replaceWinery(@RequestBody Winery winery, @PathVariable("id") int id, HttpServletResponse resp) {
		try {
			winery = wineryService.update(winery, id);
			if (winery != null) {
				resp.setStatus(201);
				return winery;
			}
		} catch (Exception e) {
			resp.setStatus(400);
			winery = null;
			e.printStackTrace();
		}
		return winery;
	}
	
	@DeleteMapping("wineries/{id}")
	public void deleteWinery(@PathVariable("id") int id, HttpServletResponse resp) {
		try {
			boolean success = wineryService.delete(id);
			if (success) {
				resp.setStatus(204);
			} else {
				resp.setStatus(404);
			}
		} catch (Exception e) {
			resp.setStatus(400);
			e.printStackTrace();
		}
	}
	
	@GetMapping("wineries/search/{city}")
	public List<Winery> findWineryByCity(@PathVariable("city") String city, HttpServletResponse resp) {
		List<Winery> wineries = wineryService.findByCity(city);
		if (wineries != null) {
			return wineries;
		}
		resp.setStatus(404);
		return null;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
