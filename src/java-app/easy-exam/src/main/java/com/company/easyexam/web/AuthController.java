package com.company.easyexam.web;

import com.company.easyexam.model.AuthenticationRequest;
import com.company.easyexam.model.AuthenticationResponse;
import com.company.easyexam.model.RegisterRequest;
import com.company.easyexam.model.User;
import com.company.easyexam.repository.UserRepository;
import com.company.easyexam.security.JwtTokenProvider;
import com.company.easyexam.service.MyUserDetailsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping(value = "/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    private MyUserDetailsService userDetailsService;

    @Autowired
    private UserRepository repository;

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                            authenticationRequest.getUsername(),
                            authenticationRequest.getPassword()));
            final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
            final String token = tokenProvider.generateToken(userDetails);
            return ResponseEntity.ok(new AuthenticationResponse(token));

        } catch (BadCredentialsException e) {
            System.out.println("Exception " + e);
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }

    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest registerRequest) {

        User user =  new User(registerRequest.getName(),
                registerRequest.getLastName(),
                registerRequest.getUserName(),
                registerRequest.getPassword(),
                registerRequest.getUniversity(),
                registerRequest.getRol());

        try {
            repository.save(user);
            final UserDetails userDetails = userDetailsService.loadUserByUsername(user.getUserName());
            final String token = tokenProvider.generateToken(userDetails);
            return ResponseEntity.ok(new AuthenticationResponse(token));

        } catch (org.springframework.dao.DuplicateKeyException e) {
            System.out.println("Exception : " + e);
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }

    }
}
