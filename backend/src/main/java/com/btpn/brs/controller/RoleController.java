package com.btpn.brs.controller;

import com.btpn.persistence.entity.brs.RoleEntity;
import com.btpn.persistence.service.role.RoleDAOService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Bintoro on 5/11/2017.
 */
@RestController
@RequestMapping(path = "/role")
public class RoleController {
    @Autowired
    private RoleDAOService roleDAOService;

    @RequestMapping(path = "/all", method = RequestMethod.GET)
    public ResponseEntity<Iterable<RoleEntity>> getAllRoles()
    {
        return new ResponseEntity<>(roleDAOService.findAll(), HttpStatus.OK);
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<RoleEntity> getRole(@PathVariable long id)
    {
        return new ResponseEntity<>(roleDAOService.findOne(id), HttpStatus.OK);
    }
}
