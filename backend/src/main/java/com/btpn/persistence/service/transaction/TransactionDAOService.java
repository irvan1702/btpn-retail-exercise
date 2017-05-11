package com.btpn.persistence.service.transaction;

import com.btpn.persistence.entity.brs.TransactionEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * Created by Bintoro on 5/11/2017.
 */
public interface TransactionDAOService extends PagingAndSortingRepository<TransactionEntity, Long>{
}
