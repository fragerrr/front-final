package kz.springcourse.demo.service;

import kz.springcourse.demo.model.Person;
import kz.springcourse.demo.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PersonService {
    private final PersonRepository personRepository;

    @Autowired
    public PersonService(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }


    public List<Person> findAll(){
        return personRepository.findAll();
    }


    public Person findById(Integer id){
        return personRepository.findById(id).orElse(null);
    }


    public Person findByEmail(String email){
        Optional<Person> person = personRepository.findByEmail(email);
        return person.orElse(null);
    }


    public void save(Person person){
        personRepository.save(person);
    }


    public void update(Person person, Integer id){
        Person personToBeUpdated = personRepository.findById(id).orElse(null);

        if(personToBeUpdated != null){
            personToBeUpdated.setName(person.getName());
        }
    }


    public void delete(Integer id){
        personRepository.delete(personRepository.findById(id).orElse(null));
    }

}
