package com.btpn.brs.controller;

import com.btpn.persistence.entity.brs.ItemCategoryEntity;
import com.btpn.persistence.entity.brs.ItemEntity;
import com.btpn.persistence.service.itemcategory.ItemCategoryDAOService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Bintoro on 5/11/2017.
 */
@RestController
@RequestMapping(path = "/category")
public class ItemCategoryController {
    @Autowired
    private ItemCategoryDAOService itemCategoryDAOService;

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    ResponseEntity<Iterable<ItemCategoryEntity>> getAllCategories() {
        return new ResponseEntity<>(itemCategoryDAOService.findAll(), HttpStatus.OK);
    }

    @RequestMapping(value = "/items", method = RequestMethod.GET)
    ResponseEntity<Iterable<ItemEntity>> getItemsInCategory(@RequestParam ("cat_id") Long id)
    {
        ItemCategoryEntity category = itemCategoryDAOService.findOne(id);
        return new ResponseEntity<>(category.getItems(), HttpStatus.OK);
    }
}
