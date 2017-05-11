package com.btpn.persistence.service.useraccount;

import com.btpn.persistence.entity.brs.UserAccountEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * Created by Bintoro on 5/11/2017.
 */
public interface UserAccountDAOService extends PagingAndSortingRepository<UserAccountEntity, Long> {
    UserAccountEntity findByUsernameEquals(String username);
}
