package com.btpn.persistence.entity.brs;

import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="role")
public class RoleEntity {
	public RoleEntity() {};
	
	@Id
    @Column(name="role_id")
    @GeneratedValue(strategy= GenerationType.AUTO)
	private Long id;
	
	@Column(name="role_name", nullable=false)
	private String roleName;
	
	@Column(name="role_description")
	private String roleDesc;

    @OneToMany(mappedBy = "userRole", cascade = CascadeType.ALL)
    private @JsonIgnore
	List<UserEntity> users;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public String getRoleDesc() {
		return roleDesc;
	}

	public void setRoleDesc(String roleDesc) {
		this.roleDesc = roleDesc;
	}

	public List<UserEntity> getUsers() {
		return users;
	}

	public void setUsers(List<UserEntity> users) {
		this.users = users;
	}
}
