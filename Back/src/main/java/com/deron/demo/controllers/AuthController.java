package com.deron.demo.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/deron/auth")
public class AuthController {
    @GetMapping("/ok")
    public String home(){
        return "hello";
    }
    @GetMapping("/ko")
    public String ko(){ return "ko"; }
    
}
