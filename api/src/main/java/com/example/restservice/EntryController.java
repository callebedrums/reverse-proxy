package com.example.restservice;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
public class EntryController {
  @GetMapping("/entry/{entryPoint}")
  @PostMapping("/entry/{entryPoint}")
  public String greeting(@PathVariable("entryPoint") String entryPoint) {
    return "Processing entry point: " + entryPoint;
  }
}
