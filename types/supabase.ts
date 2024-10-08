export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      boxes: {
        Row: {
          active_loop_id: number | null;
          batch_id: number;
          box_id: number;
          design_id: number;
          material_id: number;
          price_id: number;
          size_id: number;
          alias: string;
        };
        Insert: {
          active_loop_id?: number | null;
          batch_id?: number;
          box_id?: number;
          design_id: number;
          material_id: number;
          price_id?: number;
          size_id?: number;
          alias: string;
        };
        Update: {
          active_loop_id?: number | null;
          batch_id?: number;
          box_id?: number;
          design_id?: number;
          material_id?: number;
          price_id?: number;
          size_id?: number;
          alias?: string;
        };
        Relationships: [
          {
            foreignKeyName: "boxes_active_loop_id_fkey";
            columns: ["active_loop_id"];
            isOneToOne: true;
            referencedRelation: "loops";
            referencedColumns: ["loop_id"];
          },
          {
            foreignKeyName: "boxes_batch_id_fkey";
            columns: ["batch_id"];
            isOneToOne: false;
            referencedRelation: "boxes_batches";
            referencedColumns: ["batch_id"];
          },
          {
            foreignKeyName: "boxes_design_id_fkey";
            columns: ["design_id"];
            isOneToOne: false;
            referencedRelation: "boxes_designs";
            referencedColumns: ["design_id"];
          },
          {
            foreignKeyName: "boxes_material_id_fkey";
            columns: ["material_id"];
            isOneToOne: false;
            referencedRelation: "boxes_materials";
            referencedColumns: ["material_id"];
          },
          {
            foreignKeyName: "boxes_price_id_fkey";
            columns: ["price_id"];
            isOneToOne: false;
            referencedRelation: "boxes_prices";
            referencedColumns: ["price_id"];
          },
          {
            foreignKeyName: "boxes_size_id_fkey";
            columns: ["size_id"];
            isOneToOne: false;
            referencedRelation: "boxes_sizes";
            referencedColumns: ["size_id"];
          },
        ];
      };
      boxes_batches: {
        Row: {
          batch_id: number;
          manufacturer: string;
          order_number: string | null;
          received_on: string;
        };
        Insert: {
          batch_id?: number;
          manufacturer: string;
          order_number?: string | null;
          received_on: string;
        };
        Update: {
          batch_id?: number;
          manufacturer?: string;
          order_number?: string | null;
          received_on?: string;
        };
        Relationships: [];
      };
      boxes_designs: {
        Row: {
          color: string;
          design_id: number;
          name: string;
        };
        Insert: {
          color: string;
          design_id?: number;
          name: string;
        };
        Update: {
          color?: string;
          design_id?: number;
          name?: string;
        };
        Relationships: [];
      };
      boxes_materials: {
        Row: {
          material_id: number;
          recycled_material: boolean;
        };
        Insert: {
          material_id?: number;
          recycled_material?: boolean;
        };
        Update: {
          material_id?: number;
          recycled_material?: boolean;
        };
        Relationships: [];
      };
      boxes_prices: {
        Row: {
          price: number;
          price_id: number;
        };
        Insert: {
          price: number;
          price_id?: number;
        };
        Update: {
          price?: number;
          price_id?: number;
        };
        Relationships: [];
      };
      boxes_sizes: {
        Row: {
          depth: number;
          height: number;
          max_weight: number;
          notes: string | null;
          size_id: number;
          weight: number;
          width: number;
        };
        Insert: {
          depth?: number;
          height?: number;
          max_weight?: number;
          notes?: string | null;
          size_id?: number;
          weight?: number;
          width?: number;
        };
        Update: {
          depth?: number;
          height?: number;
          max_weight?: number;
          notes?: string | null;
          size_id?: number;
          weight?: number;
          width?: number;
        };
        Relationships: [];
      };
      eshops: {
        Row: {
          address: string;
          brand_name: string;
          city: string;
          dic: string | null;
          eshop_id: number;
          favicon_url: string;
          ico: number | null;
          joined_on: string;
          left_on: string | null;
          legal_name: string;
          logo_url: string | null;
          zip: number;
        };
        Insert: {
          address?: string;
          brand_name: string;
          city?: string;
          dic?: string | null;
          eshop_id?: number;
          favicon_url: string;
          ico?: number | null;
          joined_on: string;
          left_on?: string | null;
          legal_name: string;
          logo_url?: string | null;
          zip?: number;
        };
        Update: {
          address?: string;
          brand_name?: string;
          city?: string;
          dic?: string | null;
          eshop_id?: number;
          favicon_url?: string;
          ico?: number | null;
          joined_on?: string;
          left_on?: string | null;
          legal_name?: string;
          logo_url?: string | null;
          zip?: number;
        };
        Relationships: [];
      };
      eshops_sent: {
        Row: {
          box_id: number;
          eshop_id: number;
          id: number;
          shipped_at: string;
        };
        Insert: {
          box_id: number;
          eshop_id: number;
          id?: number;
          shipped_at?: string;
        };
        Update: {
          box_id?: number;
          eshop_id?: number;
          id?: number;
          shipped_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "eshops_sent_box_id_fkey";
            columns: ["box_id"];
            isOneToOne: false;
            referencedRelation: "boxes";
            referencedColumns: ["box_id"];
          },
          {
            foreignKeyName: "eshops_sent_eshop_id_fkey";
            columns: ["eshop_id"];
            isOneToOne: false;
            referencedRelation: "eshops";
            referencedColumns: ["eshop_id"];
          },
        ];
      };
      eshops_users: {
        Row: {
          created_at: string;
          eshop_id: number;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          eshop_id: number;
          user_id: string;
        };
        Update: {
          created_at?: string;
          eshop_id?: number;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "eshops_users_eshop_id_fkey";
            columns: ["eshop_id"];
            isOneToOne: false;
            referencedRelation: "eshops";
            referencedColumns: ["eshop_id"];
          },
          {
            foreignKeyName: "eshops_users_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      loops: {
        Row: {
          box_id: number;
          loop_id: number;
          order_id: number | null;
          return_location_id: number | null;
        };
        Insert: {
          box_id: number;
          loop_id?: number;
          order_id?: number | null;
          return_location_id?: number | null;
        };
        Update: {
          box_id?: number;
          loop_id?: number;
          order_id?: number | null;
          return_location_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "loops_box_id_fkey";
            columns: ["box_id"];
            isOneToOne: false;
            referencedRelation: "boxes";
            referencedColumns: ["box_id"];
          },
        ];
      };
      loops_pairings: {
        Row: {
          bank_account_number: string;
          bank_account_prefix: string | null;
          bank_code: string;
          created_at: string | null;
          email: string;
          loop_id: number;
          pairing_id: number;
        };
        Insert: {
          bank_account_number: string;
          bank_account_prefix?: string | null;
          bank_code: string;
          created_at?: string | null;
          email: string;
          loop_id: number;
          pairing_id?: number;
        };
        Update: {
          bank_account_number?: string;
          bank_account_prefix?: string | null;
          bank_code?: string;
          created_at?: string | null;
          email?: string;
          loop_id?: number;
          pairing_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "loops_pairings_loop_id_fkey";
            columns: ["loop_id"];
            isOneToOne: false;
            referencedRelation: "loops";
            referencedColumns: ["loop_id"];
          },
        ];
      };
      loops_updates: {
        Row: {
          change_id: number;
          loop_id: number;
          timestamp: string;
          update_type: number;
        };
        Insert: {
          change_id?: number;
          loop_id: number;
          timestamp?: string;
          update_type: number;
        };
        Update: {
          change_id?: number;
          loop_id?: number;
          timestamp?: string;
          update_type?: number;
        };
        Relationships: [
          {
            foreignKeyName: "loops_updates_loop_id_fkey";
            columns: ["loop_id"];
            isOneToOne: false;
            referencedRelation: "loops";
            referencedColumns: ["loop_id"];
          },
          {
            foreignKeyName: "loops_updates_update_type_fkey";
            columns: ["update_type"];
            isOneToOne: false;
            referencedRelation: "loops_updates_types";
            referencedColumns: ["code"];
          },
        ];
      };
      loops_updates_types: {
        Row: {
          code: number;
          description: string;
        };
        Insert: {
          code?: number;
          description: string;
        };
        Update: {
          code?: number;
          description?: string;
        };
        Relationships: [];
      };
      palletes: {
        Row: {
          boxes: number[] | null;
          count: number | null;
          pallete_id: number;
          status: number;
        };
        Insert: {
          boxes?: number[] | null;
          count?: number | null;
          pallete_id?: number;
          status?: number;
        };
        Update: {
          boxes?: number[] | null;
          count?: number | null;
          pallete_id?: number;
          status?: number;
        };
        Relationships: [
          {
            foreignKeyName: "palletes_status_fkey";
            columns: ["status"];
            isOneToOne: false;
            referencedRelation: "palletes_statuses";
            referencedColumns: ["status_id"];
          },
        ];
      };
      palletes_statuses: {
        Row: {
          description: string;
          status_id: number;
        };
        Insert: {
          description: string;
          status_id?: number;
        };
        Update: {
          description?: string;
          status_id?: number;
        };
        Relationships: [];
      };
      por_returns: {
        Row: {
          created_at: string;
          location_id: number;
          loop_id: number;
        };
        Insert: {
          created_at?: string;
          location_id: number;
          loop_id: number;
        };
        Update: {
          created_at?: string;
          location_id?: number;
          loop_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "public_por_returns_loop_id_fkey";
            columns: ["loop_id"];
            isOneToOne: true;
            referencedRelation: "loops";
            referencedColumns: ["loop_id"];
          },
        ];
      };
      retailers: {
        Row: {
          address: string;
          brand_name: string;
          city: string;
          dic: string | null;
          favicon_url: string;
          ico: number | null;
          joined_on: string;
          left_on: string | null;
          legal_name: string;
          retailer_id: number;
          zip: number;
        };
        Insert: {
          address?: string;
          brand_name: string;
          city?: string;
          dic?: string | null;
          favicon_url: string;
          ico?: number | null;
          joined_on: string;
          left_on?: string | null;
          legal_name: string;
          retailer_id?: number;
          zip?: number;
        };
        Update: {
          address?: string;
          brand_name?: string;
          city?: string;
          dic?: string | null;
          favicon_url?: string;
          ico?: number | null;
          joined_on?: string;
          left_on?: string | null;
          legal_name?: string;
          retailer_id?: number;
          zip?: number;
        };
        Relationships: [];
      };
      retailers_orders: {
        Row: {
          created_at: string;
          invoice_number: number;
          issue_date: string;
          maturity_date: string;
          order_id: number;
          products: Json;
          retailer_id: number;
          status_id: number | null;
          taxable_date: string | null;
          total_price: number;
        };
        Insert: {
          created_at?: string;
          invoice_number: number;
          issue_date?: string;
          maturity_date?: string;
          order_id?: number;
          products: Json;
          retailer_id: number;
          status_id?: number | null;
          taxable_date?: string | null;
          total_price: number;
        };
        Update: {
          created_at?: string;
          invoice_number?: number;
          issue_date?: string;
          maturity_date?: string;
          order_id?: number;
          products?: Json;
          retailer_id?: number;
          status_id?: number | null;
          taxable_date?: string | null;
          total_price?: number;
        };
        Relationships: [
          {
            foreignKeyName: "retailers_orders_retailer_id_fkey";
            columns: ["retailer_id"];
            isOneToOne: false;
            referencedRelation: "retailers";
            referencedColumns: ["retailer_id"];
          },
          {
            foreignKeyName: "retailers_orders_status_id_fkey";
            columns: ["status_id"];
            isOneToOne: false;
            referencedRelation: "retailers_orders_statuses";
            referencedColumns: ["id"];
          },
        ];
      };
      retailers_orders_statuses: {
        Row: {
          description: string;
          id: number;
        };
        Insert: {
          description: string;
          id?: number;
        };
        Update: {
          description?: string;
          id?: number;
        };
        Relationships: [];
      };
      retailers_warehouses: {
        Row: {
          address_id: number;
          city: string;
          country: string;
          district: string;
          email: string;
          house_number: number;
          phone: string;
          region: string;
          retailer_id: number | null;
          street: string;
          street_number: number;
          zip: number;
        };
        Insert: {
          address_id?: number;
          city: string;
          country?: string;
          district?: string;
          email?: string;
          house_number: number;
          phone?: string;
          region: string;
          retailer_id?: number | null;
          street: string;
          street_number: number;
          zip: number;
        };
        Update: {
          address_id?: number;
          city?: string;
          country?: string;
          district?: string;
          email?: string;
          house_number?: number;
          phone?: string;
          region?: string;
          retailer_id?: number | null;
          street?: string;
          street_number?: number;
          zip?: number;
        };
        Relationships: [
          {
            foreignKeyName: "retailers_warehouses_retailer_id_fkey";
            columns: ["retailer_id"];
            isOneToOne: false;
            referencedRelation: "retailers";
            referencedColumns: ["retailer_id"];
          },
        ];
      };
      roles: {
        Row: {
          description: string;
          id: number;
        };
        Insert: {
          description: string;
          id?: number;
        };
        Update: {
          description?: string;
          id?: number;
        };
        Relationships: [];
      };
      users_roles: {
        Row: {
          id: string;
          role: number;
        };
        Insert: {
          id: string;
          role: number;
        };
        Update: {
          id?: string;
          role?: number;
        };
        Relationships: [
          {
            foreignKeyName: "users_roles_id_fkey";
            columns: ["id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      words: {
        Row: {
          word: string;
          word_id: number;
        };
        Insert: {
          word: string;
          word_id?: number;
        };
        Update: {
          word?: string;
          word_id?: number;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      generate_random_suffix: {
        Args: {
          word_length: number;
        };
        Returns: string;
      };
      generate_unique_word: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      get_retailer: {
        Args: {
          alias: string;
        };
        Returns: {
          brand: string;
          favicon: string;
        }[];
      };
      landingpagesignup: {
        Args: {
          usermail: string;
        };
        Returns: undefined;
      };
      por_in_view: {
        Args: {
          min_lat: number;
          min_long: number;
          max_lat: number;
          max_long: number;
        };
        Returns: {
          location_id: number;
          lng: number;
          lat: number;
          partner_id: number;
          official_url: string;
          brand_name: string;
          city: string;
          zip: number;
          street: string;
          house_number: number;
          street_number: number;
        }[];
      };
      update_palletes_boxes: {
        Args: {
          selected_pallete_id: number;
          selected_batch_id: number;
        };
        Returns: undefined;
      };
    };
    Enums: {
      country: "CZ";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;
