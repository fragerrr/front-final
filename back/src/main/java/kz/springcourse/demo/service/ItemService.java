package kz.springcourse.demo.service;

import kz.springcourse.demo.model.Item;
import kz.springcourse.demo.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;



@Service
@Transactional
public class ItemService {
    private final ItemRepository itemRepository;


    @Autowired
    public ItemService(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }


    public List<Item> findAll(){
        return itemRepository.findAll();
    }

    public List<Item> findItemsBySearch(String title){
        return itemRepository.findByTitleStartingWith(title);
    }


    public Item findById(Integer id){
        return itemRepository.findById(id).orElse(null);
    }


    public void save(Item item){
        itemRepository.save(item);
    }


    public void update(Item book){
        Item bookToBeUpdated = itemRepository.findById(book.getId()).orElse(null);


    }

    public List<Item> findByCategory(String category){
        return itemRepository.findByCategory(category);
    }

    public void delete(Integer id){
        itemRepository.delete(itemRepository.findById(id).orElse(null));
    }

}
