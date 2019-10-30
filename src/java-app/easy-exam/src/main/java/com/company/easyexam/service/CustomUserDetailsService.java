//package com.company.easyexam.service;
//
//import com.company.easyexam.model.User;
//import com.company.easyexam.repository.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//
//import java.util.Arrays;
//import java.util.List;
//
//import static com.sun.tools.doclint.Entity.not;
//
//public class CustomUserDetailsService implements UserDetailsService {
//    @Autowired
//    private UserRepository repository;
//
//    public User findUserByEmail(String email) {
//        return userRepository.findByEmail(email);
//    }
//
//    @Override
//    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
//        User user = repository.findByEmail(email);
//        if(user==null){
//            throw new UsernameNotFoundException("User not found");
//        }
//
//        List<SimpleGrantedAuthority>authorities = Arrays.asList(new SimpleGrantedAuthority("user"));
//
//        return (UserDetails) new User(user.getEmail(),user.getPassword(),authorities); //corregir aqui
//    }
//}
