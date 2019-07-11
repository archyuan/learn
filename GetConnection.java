import com.mysql.jdbc.Connection;

import java.sql.DriverManager;
import java.sql.SQLException;


public class GetConnection {

    public static Connection getConnection(){
        Connection conn = null;
        try {
            Class.forName("com.mysql.jdbc.Driver");
            conn = (Connection) DriverManager.getConnection("jdbc:mysql://localhost:3306/studentinfo?characterEncoding", "root", "123456789");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }
      return  conn;
    }
}
