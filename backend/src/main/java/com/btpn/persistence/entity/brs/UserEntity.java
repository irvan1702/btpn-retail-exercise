package com.btpn.persistence.entity.brs;

import java.util.Date;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="user")
public class UserEntity {
	public UserEntity() {};
	
	@Id
    @Column(name="user_id")
    @GeneratedValue(strategy= GenerationType.AUTO)
	private Long id;

	@Column(name="first_name", nullable=false)
	private String firstName;

	@Column(name="last_name", nullable=false)
	private String lastName;
	
	@Column(name="address", nullable=false)
	private String address;
	
	@Column(name="phone", nullable=false)
	private String phone;
	
	@Column(name="email", nullable=false)
	private String email;
	
	@Column(name="register_date", nullable=false)
	private Date registerDate;
	
	@ManyToOne()
	@JoinColumn(name="role_id")
	private RoleEntity userRole;
	
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonIgnore
	private List<TransactionEntity> transactions;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Date getRegisterDate() {
		return registerDate;
	}
	public void setRegisterDate(Date registerDate) {
		this.registerDate = registerDate;
	}
	public RoleEntity getUserRole() {
		return userRole;
	}
	public void setUserRole(RoleEntity userRole) {
		this.userRole = userRole;
	}
	public List<TransactionEntity> getTransactions() {
		return transactions;
	}
	public void setTransactions(List<TransactionEntity> transactions) {
		this.transactions = transactions;
	}
}
