package kz.springcourse.demo.controller;

import kz.springcourse.demo.model.Item;
import kz.springcourse.demo.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/item")
@CrossOrigin
public class ItemController {
    private final ItemService itemService;

    @Autowired
    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    @GetMapping("/category")
    public @ResponseBody List<String> getCategory(){
        List<String> categories = new ArrayList<>();

        categories.add("electronics");
        categories.add("jewelery");
        categories.add("men's clothing");
        categories.add("women's clothing");

        return categories;
    }



    @GetMapping()
    public @ResponseBody List<Item> getItemsByCategory(@RequestParam(name = "category", required = false) String category){
        if(category!=null){
            return itemService.findByCategory(category);
        } else {
            return itemService.findAll();
        }
    }

    @GetMapping("/{id}")
    public @ResponseBody Item getItem(@PathVariable(name = "id") Integer id){
        return itemService.findById(id);
    }


    @GetMapping("/search")
    public @ResponseBody List<Item> getItemsBySearch(@RequestParam(name = "title") String title){
        return itemService.findItemsBySearch(title);
    }

}
