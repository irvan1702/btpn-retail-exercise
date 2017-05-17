package com.btpn.persistence.service.transactiondetail;

import com.btpn.persistence.entity.brs.TransactionDetailEntity;
import com.btpn.persistence.entity.brs.TransactionEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

import javax.transaction.Transactional;

/**
 * Created by Bintoro on 5/11/2017.
 */
public interface TransactionDetailDAOService extends PagingAndSortingRepository<TransactionDetailEntity, Long>{
    @Transactional
    void removeByTransaction(TransactionEntity transactionEntity);
}
