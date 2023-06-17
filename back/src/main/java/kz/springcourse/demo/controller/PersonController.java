package kz.springcourse.demo.controller;

import kz.springcourse.demo.model.Item;
import kz.springcourse.demo.model.Person;
import kz.springcourse.demo.service.ItemService;
import kz.springcourse.demo.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/person")
@CrossOrigin
public class PersonController {
    private final PersonService personService;
    private final ItemService itemService;

    @Autowired
    public PersonController(PersonService personService, ItemService itemService) {
        this.personService = personService;

        this.itemService = itemService;
    }

    @GetMapping("/{id}/items")
    public @ResponseBody List<Item> bookList(@PathVariable(name = "id") Integer id){
        Person person = personService.findById(id);

        return person.getCart();
    }

    @GetMapping("/{id}/{item_id}")
    public @ResponseBody HttpStatus postList(@PathVariable(name = "id") Integer id,
                                             @PathVariable(name = "item_id") Integer item_id){

        Person person = personService.findById(id);
        Item item = itemService.findById(item_id);

        if(!person.getCart().contains(item)){
            person.getCart().add(itemService.findById(item_id));

            personService.save(person);
        }
        return HttpStatus.OK;
    }


}
