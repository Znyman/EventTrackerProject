package com.skilldistillery.winerytracker.services;

import java.util.List;

import com.skilldistillery.winerytracker.entities.Winery;

public interface WineryService {
	List<Winery> index();
	Winery create(Winery winery);
	Winery update(Winery winery, int id);
	boolean delete(int id);
}
