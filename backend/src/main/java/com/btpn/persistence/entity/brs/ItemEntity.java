package com.btpn.persistence.entity.brs;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="item")
public class ItemEntity {
	@Id
    @Column(name="item_id")
    @GeneratedValue(strategy= GenerationType.AUTO)
	private Long id;
	
	@Column(name="item_name", nullable=false)
	private String name;
	
	@Column(name="item_price", nullable=false)
	private Double price;
	
	@Column(name="item_picture")
	private String picture;
	
	@ManyToOne()
	@JoinColumn(name="item_category_id")
	private ItemCategoryEntity itemCategory;

	@OneToMany(mappedBy = "item", cascade = CascadeType.ALL)
	@JsonIgnore()
	private List<TransactionDetailEntity> transactionDetails = new ArrayList<>();

	public List<TransactionDetailEntity> getTransactionDetails() {
		return transactionDetails;
	}

	public void setTransactionDetails(List<TransactionDetailEntity> transactionDetails) {
		this.transactionDetails = transactionDetails;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public String getPicture() {
		return picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}

	public ItemCategoryEntity getItemCategory() {
		return itemCategory;
	}

	public void setItemCategory(ItemCategoryEntity itemCategory) {
		this.itemCategory = itemCategory;
	}
}
