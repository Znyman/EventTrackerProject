package com.skilldistillery.winerytracker.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.winerytracker.entities.Winery;

public interface WineryRepository extends JpaRepository<Winery, Integer> {
	List<Winery> findByCity(String city);
}
