package com.btpn.persistence.entity.brs;

import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="item_category")
public class ItemCategoryEntity {
	@Id
    @Column(name="item_category_id")
    @GeneratedValue(strategy= GenerationType.AUTO)
	private Long id;
	
	@Column(name="item_category_name", nullable=false)
	private String name;

	@OneToMany(mappedBy = "itemCategory", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<ItemEntity> items;
	
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

	public List<ItemEntity> getItems() {
		return items;
	}

	public void setItems(List<ItemEntity> items) {
		this.items = items;
	}
}
