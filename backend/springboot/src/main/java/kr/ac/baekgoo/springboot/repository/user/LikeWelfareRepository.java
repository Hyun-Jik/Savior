package kr.ac.baekgoo.springboot.repository.user;

import kr.ac.baekgoo.springboot.domain.user.Likewelfare;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LikeWelfareRepository extends JpaRepository<Likewelfare, Long> {
    List<Likewelfare> findByUser_UserSeq(Long userSeq);
    List<Likewelfare> findAll();
    void deleteByUser_UserSeqAndWelfare_WelfareId(Long userSeq, Long welfareId);
    void deleteAllByUser_UserSeq(Long userSeq);
}
