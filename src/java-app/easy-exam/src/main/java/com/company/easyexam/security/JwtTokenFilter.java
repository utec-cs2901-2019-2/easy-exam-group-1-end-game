package com.company.easyexam.security;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
/*
public class JwtTokenFilter extends GenericFilter {

    JwtTokenProvider tokenProvider;

    public JwtTokenFilter(JwtTokenProvider tokenProvider){
        this.tokenProvider = tokenProvider;
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        String token = tokenProvider.resolveToken((HttpServletRequest) request);
        if(token != null && tokenProvider.validateToken(token)) {
            Authentication auth = token != null ? tokenProvider.getAuthenticaction(token) : null;
            SecurityContextHolder.getContext().setAuthentication(auth);
        }
        chain.doFilter(request, response);
    }
}
*/