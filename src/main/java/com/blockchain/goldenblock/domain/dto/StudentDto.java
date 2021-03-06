package com.blockchain.goldenblock.domain.dto;

import com.blockchain.goldenblock.domain.entity.Student;
import lombok.*;

@Builder
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class StudentDto {
    private String name;
    private String school;
    private String email;
    private String password;
    private String rank;
    
    public Student toEntity() {
        Student student = Student.builder()
                .name(name)
                .school(school)
                .email(email)
                .password(password)
                .rank(rank)
                .build();
        return student;
    }

}
