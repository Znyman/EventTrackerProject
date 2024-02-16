package com.skilldistillery.winerytracker.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.winerytracker.entities.Winery;
import com.skilldistillery.winerytracker.repositories.WineryRepository;

@Service
public class WineryServiceImpl implements WineryService {

	@Autowired
	private WineryRepository wineryRepo;
	
	@Override
	public List<Winery> index() {
		return wineryRepo.findAll();
	}

}
