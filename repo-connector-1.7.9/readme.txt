=================================
 Smartling repo-connector README
=================================

  The Repository Connector acts as broker between the source repository and
  the Smartling project. Changes to resource files in the repository are
  automatically pushed to the Smartling project.

  The Connector will register a callback for each file so that it can be
  notified when the file is completely translated, then it will immediately
  download the translated file and can optionally push the translated files
  back to the repository.

  See official documentation at:
  https://docs.smartling.com/display/docs/Repository+Connector

-----------------
  Installation
-----------------

   You must have Java 7 or newer.

   1. Unpack repo-connector distribution

   2. Configure all needed parameters in cfg/repo-connector.conf file

   3. Create translation configuration file smartling-config.json on your 
      repo-connector host and point it from cfg/repo-connector.conf 
      (serverResourcesConfig property)
		OR
      Create translation configuration file smartling-config.json in your
      repository. Commit and push it.

      See an example for translation configuration in 
      smartling-config-example.json file

   4. Run repo-connector with command like:
      java -jar repo-connector-1.0.0-SNAPSHOT.jar -start

   6. repo-connector is ready!
      Check Smartling for new uploaded strings!
