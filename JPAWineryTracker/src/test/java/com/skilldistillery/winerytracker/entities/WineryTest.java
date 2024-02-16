package com.skilldistillery.winerytracker.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

class WineryTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private Winery winery;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("JPAWineryTracker");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		winery = em.find(Winery.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		winery = null;
	}

	@Test
	void test_Winery_entity_mapping() {
		assertNotNull(winery);
		assertEquals("Favero Vineyards", winery.getName());
	}

}
