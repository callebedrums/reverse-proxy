package com.example.restservice;

import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class EntryController {
  @GetMapping("/entry/{entryPoint}")
  @PostMapping("/entry/{entryPoint}")
  public String entry(@PathVariable("entryPoint") String entryPoint) {
    return "Processing entry point: " + entryPoint;
  }

  @GetMapping("/context/{entryPoint}")
  public Message context(@PathVariable("entryPoint") String entryPoint, @RequestParam Map<String, String> params) {
    return new Message("Processing entry point: " + entryPoint + "; " + params.entrySet());
  }
}
