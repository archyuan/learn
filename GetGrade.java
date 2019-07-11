import com.mysql.jdbc.Connection;
import com.mysql.jdbc.PreparedStatement;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

public class GetGrade {

    public static void main(String args[]){

        Connection conn = GetConnection.getConnection();
        PreparedStatement pe = null;

        String sql = "SELECT stuclass.stunum,ANY_VALUE(stuclass.classnum),ANY_VALUE(grade) FROM stuclass  GROUP BY stuclass.stunum,stuclass.classnum";

        try {
             pe = (PreparedStatement)conn.prepareStatement(sql);
            ResultSet rs = pe.executeQuery();
            while (rs.next()){
                int stunum = rs.getInt(1);
                int classnum = rs.getInt(2);
                int grade  = rs.getInt(3);
                System.out.println("stunum "+stunum+",classnum"+classnum+",grade"+grade);
            }
            sql="SELECT stuclass.stunum,SUM(grade) su FROM stuclass   GROUP BY stuclass.stunum Order By su desc";
            pe = (PreparedStatement)conn.prepareStatement(sql);
            rs = pe.executeQuery();

            while (rs.next()){
                int stunum = rs.getInt(1);
                 float su = rs.getFloat(2);
                 System.out.println("stunum "+stunum+",sumgrade "+su);
            }



        }catch (SQLException e){
            e.printStackTrace();
        }finally {
            if (pe != null) {
                try {
                    pe.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }

            }

        }

    }

}
