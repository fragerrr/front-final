package kz.springcourse.demo.repository;

import kz.springcourse.demo.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRepository extends JpaRepository<Item, Integer> {
    List<Item> findByTitleStartingWith(String title);
    List<Item> findByCategory(String category);
}
