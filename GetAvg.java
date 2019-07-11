import com.mysql.jdbc.Connection;
import com.mysql.jdbc.PreparedStatement;

import java.sql.ResultSet;
import java.sql.SQLException;

public class GetAvg {

    public static  void main(String[] args) throws SQLException {
        Connection conn = GetConnection.getConnection();
        PreparedStatement pe = null;

        try{

            String sql = "SELECT stuclass.classnum ,classnam,AVG(grade) avg FROM stuclass,classinfo WHERE stuclass.classnum=classinfo.classnum GROUP BY stuclass.classnum";

            pe = (PreparedStatement) conn.prepareStatement(sql);
            ResultSet rs = pe.executeQuery();
            while (rs.next()){
                int classnum = rs.getInt(1);
                String classname = rs.getString(2);

                float avg = rs.getFloat(3);
                System.out.println("classnum "+classnum+",classname "+classname+",AVG "+avg);


            }

        } finally {
            conn.close();
        }

    }
}
