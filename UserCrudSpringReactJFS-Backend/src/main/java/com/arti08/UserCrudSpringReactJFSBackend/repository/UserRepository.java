package com.arti08.UserCrudSpringReactJFSBackend.repository;

import com.arti08.UserCrudSpringReactJFSBackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
