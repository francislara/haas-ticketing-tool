class Api::TicketsController < ApplicationController

  require 'google/apis/sheets_v4'
  require 'googleauth'  
  

  
  def create
    body = params[:message][:body]
    house = params[:message][:house]

    service = Google::Apis::SheetsV4::SheetsService.new
    service.client_options.application_name = 'Haas Ticketing Tool'
    service.authorization = Google::Auth::ServiceAccountCredentials.make_creds(
    json_key_io: File.open('service-account.json'),
    scope: Google::Apis::SheetsV4::AUTH_SPREADSHEETS)

    spreadsheet_id = '1_l9Bnd0AntmPT-h_m5m3kdkUnrzh7qPej_FKex01kfc'
    sheet_name = 'Sheet1'
    range = "#{house}!A1"

    value_range_object = {
      major_dimension: "COLUMNS",
      values: [
        [body]
      ]
    }

    update_res = service.append_spreadsheet_value(spreadsheet_id, range, value_range_object, value_input_option: 'USER_ENTERED')
  end
end
