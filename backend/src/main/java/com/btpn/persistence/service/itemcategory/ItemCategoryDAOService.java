package com.btpn.persistence.service.itemcategory;

import com.btpn.persistence.entity.brs.ItemCategoryEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * Created by Bintoro on 5/11/2017.
 */
public interface ItemCategoryDAOService extends PagingAndSortingRepository <ItemCategoryEntity, Long> {
}
