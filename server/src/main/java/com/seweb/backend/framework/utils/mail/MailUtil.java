package com.seweb.backend.framework.utils.mail;

import java.io.FileInputStream;
import java.util.Properties;
import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;


public class MailUtil {

    private static String host;

    private static String suffix;

    private static String user;

    private static String password;

    private static Session session;

    private static Transport transport = null;

    private static boolean available = false;

    static {
        try {
            Properties properties = new Properties();
            Properties sessionProperties = new Properties();
            FileInputStream in = new FileInputStream("mail.properties");
            properties.load(in);
            in.close();


            host = properties.getProperty("mail.host");
            user = properties.getProperty("mail.user");
            password = properties.getProperty("mail.password");
            suffix = properties.getProperty("mail.suffix");

            sessionProperties.setProperty("mail.smtp.host",host);
            sessionProperties.setProperty("mail.transport.protocol", "smtp");
            sessionProperties.setProperty("mail.smtp.auth", "true");


            session = Session.getInstance(sessionProperties);
            session.setDebug(true);

            transport = session.getTransport();
            available = true;
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void sendMail(String address, String title, String content) throws Exception{
        if(!available) throw new Exception("SMTP Session unavailable.");
        MimeMessage mimeMessage = new MimeMessage(session);
        mimeMessage.setFrom(new InternetAddress(user+suffix));
        mimeMessage.setRecipient(Message.RecipientType.TO, new InternetAddress(address));
        mimeMessage.setSubject(title);
        mimeMessage.setContent(content,"text/html;charset=UTF-8");
        try{
            transport.connect(user,password);
        }
        catch (Exception e){
            if(e.getClass() != IllegalStateException.class)
                e.printStackTrace();
        }
        finally {
            transport.sendMessage(mimeMessage,mimeMessage.getAllRecipients());
        }
    }
}
