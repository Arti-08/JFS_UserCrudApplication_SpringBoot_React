package com.arti08.UserCrudSpringReactJFSBackend.exception;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(Long id){
        super("could not found the user with id" +id);
    }
}
