package com.btpn.persistence.service.item;

import com.btpn.persistence.entity.brs.ItemEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * Created by Bintoro on 5/10/2017.
 */
public interface ItemDAOService extends PagingAndSortingRepository<ItemEntity, Long> {
}
