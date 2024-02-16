package com.skilldistillery.winerytracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.winerytracker.entities.Winery;
import com.skilldistillery.winerytracker.services.WineryService;

@RestController
@RequestMapping("api")
public class WineryController {
	
	@Autowired
	private WineryService wineryService;
	
	@GetMapping(path = {"wineries", "wineries/"})
	public List<Winery> index() {
		return wineryService.index();
	}
}
