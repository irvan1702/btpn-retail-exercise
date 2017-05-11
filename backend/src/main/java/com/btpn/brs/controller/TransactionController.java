package com.btpn.brs.controller;

import com.btpn.persistence.entity.brs.TransactionEntity;
import com.btpn.persistence.service.transaction.TransactionDAOService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Bintoro on 5/11/2017.
 */
@RestController
@RequestMapping(path = "/transaction")
public class TransactionController {
    @Autowired
    private TransactionDAOService transactionDAOService;

    @RequestMapping(path = "/all")
    public ResponseEntity<Iterable<TransactionEntity>> getAllTransactions()
    {
        return new ResponseEntity<>(transactionDAOService.findAll(), HttpStatus.OK);
    }

    @RequestMapping(path = "/{id}")
    public ResponseEntity<TransactionEntity> getTransaction(@PathVariable long id)
    {
        return new ResponseEntity<>(transactionDAOService.findOne(id), HttpStatus.OK);
    }
}
