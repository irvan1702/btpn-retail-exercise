package com.btpn.persistence.entity.transactiondetail;

import javax.persistence.*;

import com.btpn.persistence.entity.item.ItemEntity;

@Entity
@Table(name="transaction_detail")
public class TransactionDetailEntity {
	@Id
    @Column(name="transaction_detail_id")
    @GeneratedValue(strategy= GenerationType.AUTO)
	private Long id;
	
	@ManyToOne()
	@JoinColumn(name="item_id")
	private ItemEntity item;
	
	@Column(name="qty", nullable=false)
	private int qty;
	
	@Column(name="single_price", nullable=false)
	private Double singlePrice;
	
	@Column(name="discount")
	private Double discount;
	
	@Column(name="subtotal", nullable=false)
	private Double subtotal;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public ItemEntity getItem() {
		return item;
	}

	public void setItem(ItemEntity item) {
		this.item = item;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	public Double getSinglePrice() {
		return singlePrice;
	}

	public void setSinglePrice(Double singlePrice) {
		this.singlePrice = singlePrice;
	}

	public Double getDiscount() {
		return discount;
	}

	public void setDiscount(Double discount) {
		this.discount = discount;
	}

	public Double getSubtotal() {
		return subtotal;
	}

	public void setSubtotal(Double subtotal) {
		this.subtotal = subtotal;
	}
	
	
}
