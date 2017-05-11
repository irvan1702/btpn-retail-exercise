package com.btpn.brs.controller;

import com.btpn.persistence.service.item.ItemDAOService;
import com.btpn.persistence.entity.brs.ItemEntity;
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

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    ResponseEntity<Iterable<ItemEntity>> getAllItems() {
        return new ResponseEntity<>(itemDAOService.findAll(), HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    ResponseEntity<ItemEntity> getItem(@PathVariable long id) {
        return new ResponseEntity<>(itemDAOService.findOne(id), HttpStatus.OK);
    }
}
