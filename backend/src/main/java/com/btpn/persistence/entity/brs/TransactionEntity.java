package com.btpn.persistence.entity.brs;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="transaction")
public class TransactionEntity {
	@Id
    @Column(name="transaction_id")
    @GeneratedValue(strategy= GenerationType.AUTO)
	private Long id;
	
	@Column(name="transaction_date", nullable=false)
	private Date transactionDate;
	
	@Column(name="total_price", nullable=false)
	private Double totalPrice;
	
	@Column(name="discount")
	private Double discount;
	
	@Column(name="grand_total", nullable=false)
	private Double grandTotal;
	
	@ManyToOne()
	@JoinColumn(name="user_id")
	private UserEntity user;
	
	@OneToMany(mappedBy = "transaction", cascade = CascadeType.ALL)
	@JsonIgnore()
    private List<TransactionDetailEntity> transactionDetails = new ArrayList<>();


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getTransactionDate() {
		return transactionDate;
	}

	public void setTransactionDate(Date transactionDate) {
		this.transactionDate = transactionDate;
	}

	public Double getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(Double totalPrice) {
		this.totalPrice = totalPrice;
	}

	public Double getDiscount() {
		return discount;
	}

	public void setDiscount(Double discount) {
		this.discount = discount;
	}

	public Double getGrandTotal() {
		return grandTotal;
	}

	public void setGrandTotal(Double grandTotal) {
		this.grandTotal = grandTotal;
	}

	public UserEntity getUser() {
		return user;
	}

	public void setUser(UserEntity user) {
		this.user = user;
	}

	public List<TransactionDetailEntity> getTransactionDetails() {
		return transactionDetails;
	}

	public void setTransactionDetails(List<TransactionDetailEntity> transactionDetails) {
		for (TransactionDetailEntity transactionDetail: transactionDetails)
		{
			this.transactionDetails.add(transactionDetail);
			transactionDetail.setTransaction(this);
		}
	}
}
