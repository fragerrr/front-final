package kz.springcourse.demo.controller;

import jakarta.validation.Valid;
import kz.springcourse.demo.model.LoginForm;
import kz.springcourse.demo.model.Person;
import kz.springcourse.demo.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/auth")
@CrossOrigin
public class AuthController {

    private final PersonService personService;

    @Autowired
    public AuthController(PersonService personService) {
        this.personService = personService;
    }

    @PostMapping("/login")
    public ResponseEntity<Integer> login(@RequestBody LoginForm loginForm){
        Person person = personService.findByEmail(loginForm.getEmail());

        if(person != null){
            if(person.getPassword().equalsIgnoreCase(loginForm.getPassword()) ){
                return ResponseEntity.ok(person.getId());
            }
        }

        return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }


    @PostMapping("/register")
    public ResponseEntity<HttpStatus> addPerson(@RequestBody Person person){

        if(personService.findByEmail(person.getEmail()) != null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            personService.save(person);
            return ResponseEntity.ok(HttpStatus.OK);
        }
    }


}
