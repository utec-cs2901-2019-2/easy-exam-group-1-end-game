package com.company.easyexam.web;

import org.springframework.web.bind.annotation.*;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("/auth")
public class AuthController {

    /*
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtTokenProvider jwtTokenProvider;

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserServiceImpl userService;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody AuthBody data){
        try{
            String username = data.getUserName();
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, data.getPassword()));
            String token = jwtTokenProvider.createToken(this.userRepository.findByUserName(username).getUserName());
            Map<Object, Object> model = new HashMap<>();
            model.put("username", username);
            model.put("token", token);
            return ok(model);
        } catch (AuthenticationException e) {
            throw new BadCredentialsException("Invalid email/password supplied");
        }
    }*/
}
