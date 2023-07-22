package com.arti08.UserCrudSpringReactJFSBackend.exception;

import lombok.experimental.StandardException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class UserNotFoundAdvice {
    //so when exception occur this will tell springboot that this is a handler method
    @ResponseBody
    @ExceptionHandler(UserNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String , String> exceptionHandler(UserNotFoundException exception){
        //from exception --> we will get all the fields which has issue
         Map<String, String> errorMap= new HashMap<>();
         errorMap.put("errorMessage", exception.getMessage());
         return errorMap;
    }
}
