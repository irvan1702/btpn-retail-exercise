package com.btpn.brs.controller;

import com.btpn.persistence.entity.brs.UserAccountEntity;
import com.btpn.persistence.service.useraccount.UserAccountDAOService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.NoSuchAlgorithmException;

/**
 * Created by Bintoro on 5/11/2017.
 */
@RestController
@RequestMapping(path = "/account")
public class UserAccountController {
    @Autowired
    private UserAccountDAOService userAccountDAOService;

    @RequestMapping(path = "/authorize", method = RequestMethod.POST)
    public ResponseEntity<Boolean> authorizeLogin(@RequestParam String username, @RequestParam String password)
    {
        UserAccountEntity targetUser = userAccountDAOService.findByUsernameEquals(username);

        if (targetUser != null)
        {
            try
            {
                String sha1Pass = UserAccountEntity.sha1(password);
                if (targetUser.getPassword().equals(sha1Pass))
                    return new ResponseEntity<>(true, HttpStatus.OK);
            }
            catch(NoSuchAlgorithmException err)
            {
                err.printStackTrace();
                return new ResponseEntity<>(false, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<>(false, HttpStatus.UNAUTHORIZED);
    }
}
