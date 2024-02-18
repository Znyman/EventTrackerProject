package com.skilldistillery.winerytracker.services;

import java.util.List;
import java.util.Optional;

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

	@Override
	public Winery create(Winery winery) {
		return wineryRepo.save(winery);
	}

	@Override
	public Winery update(Winery winery, int id) {
		Optional<Winery> wineryOpt = wineryRepo.findById(id);
		if (wineryOpt.isPresent()) {
			return wineryRepo.save(winery);
		}
		return null;
	}

	@Override
	public boolean delete(int id) {
		if (wineryRepo.findById(id).isPresent() == false) {
			return false;
		}
		wineryRepo.deleteById(id);
		return true;
	}

	@Override
	public Winery findById(int id) {
		Optional<Winery> wineryOpt = wineryRepo.findById(id);
		if (wineryOpt.isPresent()) {
			return wineryOpt.get();
		}
		return null;
	}


}
