package com.btpn.persistence.service.user;

import com.btpn.persistence.entity.brs.UserEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * Created by Bintoro on 5/10/2017.
 */
public interface UserDAOService extends PagingAndSortingRepository <UserEntity, Long>{
}
