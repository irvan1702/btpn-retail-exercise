package com.btpn.brs.controller;

import com.btpn.persistence.service.item.ItemDAOService;
import com.btpn.persistence.entity.brs.ItemEntity;
import com.btpn.persistence.service.itemcategory.ItemCategoryDAOService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Created by Bintoro on 5/10/2017.
 */
@RestController
@RequestMapping(path = "/item")
public class ItemController {
    @Autowired
    private ItemDAOService itemDAOService;

    @Autowired
    private ItemCategoryDAOService itemCategoryDAOService;

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    ResponseEntity<Iterable<ItemEntity>> getAllItems() {
        return new ResponseEntity<>(itemDAOService.findAll(), HttpStatus.OK);
    }

    @RequestMapping(value="/modify", method = RequestMethod.POST)
    ResponseEntity<ItemEntity> modifyItem(@RequestParam (required = false) Long itemId, @RequestParam Long categoryId, @RequestParam String name, @RequestParam Double price)
    {
        ItemEntity target = new ItemEntity();
        if (itemId != null)
            target = itemDAOService.findOne(itemId);

        target.setName(name);
        target.setPrice(price);
        target.setItemCategory(itemCategoryDAOService.findOne(categoryId));

        itemDAOService.save(target);

        return new ResponseEntity<>(target, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    ResponseEntity<ItemEntity> getItem(@PathVariable long id) {
        return new ResponseEntity<>(itemDAOService.findOne(id), HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    ResponseEntity<ItemEntity> deleteItem(@PathVariable long id) {
    	ItemEntity target = itemDAOService.findOne(id);
    	itemDAOService.delete(target);
        return new ResponseEntity<>(target, HttpStatus.OK);
    }
}
