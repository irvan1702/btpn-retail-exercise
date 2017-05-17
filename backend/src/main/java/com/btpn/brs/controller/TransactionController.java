package com.btpn.brs.controller;

import com.btpn.persistence.entity.brs.TransactionDetailEntity;
import com.btpn.persistence.entity.brs.TransactionEntity;
import com.btpn.persistence.entity.brs.UserEntity;
import com.btpn.persistence.service.transaction.TransactionDAOService;
import com.btpn.persistence.service.transactiondetail.TransactionDetailDAOService;
import com.btpn.persistence.service.user.UserDAOService;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.TypeFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

/**
 * Created by Bintoro on 5/11/2017.
 */
@RestController
@RequestMapping(path = "/transaction")
public class TransactionController {
    @Autowired
    private TransactionDAOService transactionDAOService;

    @Autowired
    private TransactionDetailDAOService transactionDetailDAOService;

    @Autowired
    private UserDAOService userDAOService;

    @RequestMapping(path = "/all", method = RequestMethod.GET)
    public ResponseEntity<Iterable<TransactionEntity>> getAllTransactions()
    {
        return new ResponseEntity<>(transactionDAOService.findAll(), HttpStatus.OK);
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<TransactionEntity> getTransaction(@PathVariable long id)
    {
        return new ResponseEntity<>(transactionDAOService.findOne(id), HttpStatus.OK);
    }

    @RequestMapping(path = "/{id}/details", method = RequestMethod.GET)
    public ResponseEntity<List<TransactionDetailEntity>> getTransactionDetails(@PathVariable long id)
    {
        TransactionEntity target = transactionDAOService.findOne(id);
        return new ResponseEntity<>(target.getTransactionDetails(), HttpStatus.OK);
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<TransactionEntity> deleteTransaction(@PathVariable long id)
    {
        TransactionEntity target = transactionDAOService.findOne(id);

        transactionDAOService.delete(target);

        return new ResponseEntity<>(target, HttpStatus.OK);
    }

    @RequestMapping(path = "/modify", method = RequestMethod.POST)
    public ResponseEntity<TransactionEntity> modifyTransaction(@RequestParam (required = false) Long id, @RequestParam Long customerId, @RequestParam String transactionDetails, @RequestParam Double totalPrice, @RequestParam Double discount, @RequestParam Double grandTotal) throws Exception
    {
        TransactionEntity target = new TransactionEntity();
        if (id != null)
        {
            target = transactionDAOService.findOne(id);
            transactionDetailDAOService.removeByTransaction(target);
        }

        UserEntity customer = userDAOService.findOne(customerId);

        target.setUser(customer);
        target.setDiscount(discount);
        target.setGrandTotal(grandTotal);
        target.setTotalPrice(totalPrice);
        target.setTransactionDate(new Date());

        ObjectMapper mapper = new ObjectMapper();
        TypeFactory typeFactory = mapper.getTypeFactory();

        List<TransactionDetailEntity> transactionDetailEntityList =
                mapper.readValue(transactionDetails, typeFactory.constructCollectionType(List.class, TransactionDetailEntity.class));
        target.setTransactionDetails(transactionDetailEntityList);

        transactionDAOService.save(target);

        return new ResponseEntity<>(target, HttpStatus.OK);
    }
}
