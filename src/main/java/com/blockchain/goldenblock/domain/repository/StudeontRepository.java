package com.blockchain.goldenblock.domain.repository;

import com.blockchain.goldenblock.domain.entity.Student;

import org.springframework.data.jpa.repository.JpaRepository;

public interface StudeontRepository extends JpaRepository<Student, Long>{
    
}