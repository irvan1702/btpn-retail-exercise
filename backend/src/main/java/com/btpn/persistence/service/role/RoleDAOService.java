package com.btpn.persistence.service.role;

import com.btpn.persistence.entity.brs.RoleEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * Created by Bintoro on 5/11/2017.
 */
public interface RoleDAOService extends PagingAndSortingRepository <RoleEntity, Long>{
}
