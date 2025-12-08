package com.homecooked.homecooked.entity;



import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "meals")
public class Meal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(length = 1000)
    private String description;

    @Column(nullable = false)
    private Double price;

    @Column(nullable = false)
    private Boolean available = true;

    @Column(nullable = false)
    private String cuisine;

    @Column(nullable = false)
    private Long chefId; // Reference to User entity with role CHEF

    @Column
    private String imageUrl;
}
