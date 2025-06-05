# Usa la imagen oficial de Tomcat 11 con Java 17
FROM tomcat:11-jdk17

# Elimina las aplicaciones por defecto (opcional pero recomendado)
RUN rm -rf /usr/local/tomcat/webapps/*

# Copia tu archivo WAR y lo renombra como ROOT.war (opcional)
COPY dist/contact-book-frontend/browser /usr/local/tomcat/webapps/ROOT

# Expone el puerto por defecto de Tomcat
EXPOSE 8080
